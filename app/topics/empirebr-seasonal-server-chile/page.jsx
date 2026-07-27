import EmpirebrSeasonalServerChileKeywordPage, { generateMetadata } from './empirebr-seasonal-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrSeasonalServerChileKeywordPage />;
}
