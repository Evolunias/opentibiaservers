import AdrasteaPage, { generateMetadata } from './adrastea';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AdrasteaPage />;
}
