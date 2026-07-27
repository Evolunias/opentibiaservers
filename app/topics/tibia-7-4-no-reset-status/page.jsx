import Tibia74NoResetStatusKeywordPage, { generateMetadata } from './tibia-7-4-no-reset-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74NoResetStatusKeywordPage />;
}
