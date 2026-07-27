import ImperianicRetroServerArgentinaKeywordPage, { generateMetadata } from './imperianic-retro-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicRetroServerArgentinaKeywordPage />;
}
