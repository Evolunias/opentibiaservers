import NonPvpGuidePolandKeywordPage, { generateMetadata } from './non-pvp-guide-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpGuidePolandKeywordPage />;
}
