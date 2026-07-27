import LumineraRetroServerArgentinaKeywordPage, { generateMetadata } from './luminera-retro-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraRetroServerArgentinaKeywordPage />;
}
