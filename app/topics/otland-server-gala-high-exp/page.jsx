import OtlandServerGalaHighExpKeywordPage, { generateMetadata } from './otland-server-gala-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtlandServerGalaHighExpKeywordPage />;
}
