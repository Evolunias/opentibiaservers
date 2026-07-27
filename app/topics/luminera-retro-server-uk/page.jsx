import LumineraRetroServerUkKeywordPage, { generateMetadata } from './luminera-retro-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraRetroServerUkKeywordPage />;
}
