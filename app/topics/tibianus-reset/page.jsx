import TibianusResetKeywordPage, { generateMetadata } from './tibianus-reset';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusResetKeywordPage />;
}
