import Tibia14NoResetStatusKeywordPage, { generateMetadata } from './tibia-14-no-reset-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14NoResetStatusKeywordPage />;
}
