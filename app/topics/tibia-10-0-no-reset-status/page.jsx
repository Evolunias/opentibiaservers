import Tibia100NoResetStatusKeywordPage, { generateMetadata } from './tibia-10-0-no-reset-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100NoResetStatusKeywordPage />;
}
