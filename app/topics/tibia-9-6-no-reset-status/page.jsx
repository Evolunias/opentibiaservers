import Tibia96NoResetStatusKeywordPage, { generateMetadata } from './tibia-9-6-no-reset-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96NoResetStatusKeywordPage />;
}
