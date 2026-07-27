import ImperianicClientKeywordPage, { generateMetadata } from './imperianic-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicClientKeywordPage />;
}
