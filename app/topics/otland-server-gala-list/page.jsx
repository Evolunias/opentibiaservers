import OtlandServerGalaListKeywordPage, { generateMetadata } from './otland-server-gala-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtlandServerGalaListKeywordPage />;
}
