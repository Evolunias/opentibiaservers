import LowrateThorniaClientKeywordPage, { generateMetadata } from './lowrate-thornia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateThorniaClientKeywordPage />;
}
