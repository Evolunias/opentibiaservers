import SabrehavenEvoServerChileKeywordPage, { generateMetadata } from './sabrehaven-evo-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenEvoServerChileKeywordPage />;
}
