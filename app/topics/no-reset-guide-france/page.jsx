import NoResetGuideFranceKeywordPage, { generateMetadata } from './no-reset-guide-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetGuideFranceKeywordPage />;
}
