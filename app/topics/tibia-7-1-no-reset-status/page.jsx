import Tibia71NoResetStatusKeywordPage, { generateMetadata } from './tibia-7-1-no-reset-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71NoResetStatusKeywordPage />;
}
