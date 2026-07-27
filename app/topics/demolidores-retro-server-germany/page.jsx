import DemolidoresRetroServerGermanyKeywordPage, { generateMetadata } from './demolidores-retro-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresRetroServerGermanyKeywordPage />;
}
