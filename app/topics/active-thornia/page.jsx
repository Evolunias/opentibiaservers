import ActiveThorniaKeywordPage, { generateMetadata } from './active-thornia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveThorniaKeywordPage />;
}
