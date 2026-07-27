import LumineraRetroServerPolandKeywordPage, { generateMetadata } from './luminera-retro-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraRetroServerPolandKeywordPage />;
}
