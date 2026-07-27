import DemolidoresRetroServerCanadaKeywordPage, { generateMetadata } from './demolidores-retro-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresRetroServerCanadaKeywordPage />;
}
