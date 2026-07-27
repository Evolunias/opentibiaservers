import Tibia15NoResetStatusKeywordPage, { generateMetadata } from './tibia-15-no-reset-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15NoResetStatusKeywordPage />;
}
