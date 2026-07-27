import LowrateThorniaKeywordPage, { generateMetadata } from './lowrate-thornia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateThorniaKeywordPage />;
}
