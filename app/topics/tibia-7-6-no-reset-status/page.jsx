import Tibia76NoResetStatusKeywordPage, { generateMetadata } from './tibia-7-6-no-reset-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76NoResetStatusKeywordPage />;
}
