import EmpirebrRetroServerChileKeywordPage, { generateMetadata } from './empirebr-retro-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrRetroServerChileKeywordPage />;
}
