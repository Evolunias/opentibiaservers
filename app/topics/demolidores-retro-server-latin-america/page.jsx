import DemolidoresRetroServerLatinAmericaKeywordPage, { generateMetadata } from './demolidores-retro-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresRetroServerLatinAmericaKeywordPage />;
}
