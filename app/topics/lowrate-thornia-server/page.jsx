import LowrateThorniaServerKeywordPage, { generateMetadata } from './lowrate-thornia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateThorniaServerKeywordPage />;
}
