import NilotRetroServerArgentinaKeywordPage, { generateMetadata } from './nilot-retro-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotRetroServerArgentinaKeywordPage />;
}
