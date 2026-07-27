import RealeraMexicoServerKeywordPage, { generateMetadata } from './realera-mexico-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraMexicoServerKeywordPage />;
}
