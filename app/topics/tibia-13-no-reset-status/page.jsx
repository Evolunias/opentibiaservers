import Tibia13NoResetStatusKeywordPage, { generateMetadata } from './tibia-13-no-reset-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13NoResetStatusKeywordPage />;
}
