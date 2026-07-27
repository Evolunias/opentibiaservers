import CoxaotRetroServerChileKeywordPage, { generateMetadata } from './coxaot-retro-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotRetroServerChileKeywordPage />;
}
