import ImperianicRetroServerCanadaKeywordPage, { generateMetadata } from './imperianic-retro-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicRetroServerCanadaKeywordPage />;
}
