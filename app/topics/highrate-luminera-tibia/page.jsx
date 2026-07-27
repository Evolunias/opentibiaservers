import HighrateLumineraTibiaKeywordPage, { generateMetadata } from './highrate-luminera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateLumineraTibiaKeywordPage />;
}
