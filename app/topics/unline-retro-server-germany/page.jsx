import UnlineRetroServerGermanyKeywordPage, { generateMetadata } from './unline-retro-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineRetroServerGermanyKeywordPage />;
}
