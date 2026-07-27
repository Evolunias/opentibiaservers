import Tibia80NoResetStatusKeywordPage, { generateMetadata } from './tibia-8-0-no-reset-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80NoResetStatusKeywordPage />;
}
