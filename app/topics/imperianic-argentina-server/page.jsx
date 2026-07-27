import ImperianicArgentinaServerKeywordPage, { generateMetadata } from './imperianic-argentina-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicArgentinaServerKeywordPage />;
}
