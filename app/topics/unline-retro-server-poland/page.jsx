import UnlineRetroServerPolandKeywordPage, { generateMetadata } from './unline-retro-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineRetroServerPolandKeywordPage />;
}
