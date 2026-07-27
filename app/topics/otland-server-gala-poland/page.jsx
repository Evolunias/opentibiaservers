import OtlandServerGalaPolandKeywordPage, { generateMetadata } from './otland-server-gala-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtlandServerGalaPolandKeywordPage />;
}
