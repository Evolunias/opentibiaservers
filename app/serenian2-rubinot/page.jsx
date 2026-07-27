import Serenian2RubinotPage, { generateMetadata } from './serenian2-rubinot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenian2RubinotPage />;
}
