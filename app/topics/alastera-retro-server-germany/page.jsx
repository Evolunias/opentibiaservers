import AlasteraRetroServerGermanyKeywordPage, { generateMetadata } from './alastera-retro-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraRetroServerGermanyKeywordPage />;
}
