import RealeraBrazilServerKeywordPage, { generateMetadata } from './realera-brazil-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraBrazilServerKeywordPage />;
}
