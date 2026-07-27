import OxygenotEvoServerChileKeywordPage, { generateMetadata } from './oxygenot-evo-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotEvoServerChileKeywordPage />;
}
