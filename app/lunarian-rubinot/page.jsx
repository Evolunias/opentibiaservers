import LunarianRubinotPage, { generateMetadata } from './lunarian-rubinot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LunarianRubinotPage />;
}
