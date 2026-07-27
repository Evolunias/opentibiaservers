import Tibia84NoResetStatusKeywordPage, { generateMetadata } from './tibia-8-4-no-reset-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84NoResetStatusKeywordPage />;
}
