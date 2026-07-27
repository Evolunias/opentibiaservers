import TopLumineraOpenTibiaKeywordPage, { generateMetadata } from './top-luminera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopLumineraOpenTibiaKeywordPage />;
}
