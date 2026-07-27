import Tibia11NoResetStatusKeywordPage, { generateMetadata } from './tibia-11-no-reset-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11NoResetStatusKeywordPage />;
}
