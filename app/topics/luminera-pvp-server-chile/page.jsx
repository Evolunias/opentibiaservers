import LumineraPvpServerChileKeywordPage, { generateMetadata } from './luminera-pvp-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraPvpServerChileKeywordPage />;
}
