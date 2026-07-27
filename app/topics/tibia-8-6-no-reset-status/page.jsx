import Tibia86NoResetStatusKeywordPage, { generateMetadata } from './tibia-8-6-no-reset-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86NoResetStatusKeywordPage />;
}
