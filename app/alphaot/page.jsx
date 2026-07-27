import AlphaotPage, { generateMetadata } from './alphaot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlphaotPage />;
}
