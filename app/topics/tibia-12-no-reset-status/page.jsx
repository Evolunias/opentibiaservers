import Tibia12NoResetStatusKeywordPage, { generateMetadata } from './tibia-12-no-reset-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12NoResetStatusKeywordPage />;
}
