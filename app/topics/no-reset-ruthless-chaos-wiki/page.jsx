import NoResetRuthlessChaosWikiKeywordPage, { generateMetadata } from './no-reset-ruthless-chaos-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetRuthlessChaosWikiKeywordPage />;
}
