import Neprenia15RetroServerKeywordPage, { generateMetadata } from './neprenia-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia15RetroServerKeywordPage />;
}
